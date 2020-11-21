class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :load_posts_footer, :load_posts_landing_first, :load_posts_landing_second,:load_posts_landing_third, 
                :load_podcasts_landing_first, :load_podcasts_landing_second, :load_podcasts_landing_third 
                
  before_action :set_locale
  before_filter :set_site

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options(options = {})
    { :locale => ((I18n.locale == I18n.default_locale) ? nil : I18n.locale) }
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user

  def set_site
    if Rails.env == "development"
      session[:site] = case request.domain
      when "joynusstaffing.dev" then "joynusstaffing"
      when "tidrainc.dev" then "tidrainc"
        else ENV['site'] || "joynusstaffing"
      end
    else session[:site].blank?
      if Rails.env == "staging"
        session[:site] = case request.subdomains.last
        when "joynusstaffing" then "joynusstaffing"
        when "tidrainc" then "tidrainc"
        end
      elsif Rails.env == "production"
        session[:site] = case request.domain
        when "joynusstaffing.com" then "joynusstaffing"
        when "tidrainc.com" then "tidrainc"
          else "joynusstaffing"
        end
      else
        session[:site] = "joynusstaffing"
      end
    end
  end

  private
  def authorize
    redirect_to login_url, alert: "Not authorized" if current_user.nil?
  end

  def authorize_if_admin
    redirect_to root_url, alert: "Not authorized" if current_user.nil? || !current_user.admin?
  end

  def authorize_if_admin_or_current_user
    redirect_to root_url, alert: "Not authorized" if current_user.nil? || current_user.id != User.find(params[:id]).id && !current_user.admin?
  end
  
  def load_posts_footer
    @loadposts=Post.order("created_at DESC").limit(3)
  end
  
  def load_posts_landing_first
    @loadpostslandingfirst=Post.order("created_at DESC")[0..1]
  end 
  
  def load_posts_landing_second
    @loadpostslandingsecond=Post.order("created_at DESC")[2..3]
  end 
  
  def load_posts_landing_third
    @loadpostslandingthird=Post.order("created_at DESC")[4..5]
  end 
  
  def load_podcasts_landing_first
    @loadpodcastslandingfirst=Podcast.all[0..2]
  end
  
  def load_podcasts_landing_second
    @loadpodcastslandingsecond=Podcast.all[3..5]
  end
  
  def load_podcasts_landing_third
    @loadpodcastslandingthird=Podcast.all[6..8]
  end
  
  
end
