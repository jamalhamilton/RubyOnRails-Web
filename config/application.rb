require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

if Rails.env.development?
  require 'pry'
  require 'pry-rails'
end

module Joynusstaffing
  class Application < Rails::Application
    config.middleware.insert_after ActionDispatch::Static, Rack::Deflater
    config.i18n.default_locale = [ :en ]
    config.serve_static_assets = true
    
    config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif
    "fontello.ttf", "fontello.eot", "fontello.svg", "fontello.woff", "fontello.woff2"
    "fontello-codes.scss" , "animate.scss", "fontello-embedded.scss", "fontello-ie7-codes.scss", "fontello-ie7.scss", "fontello.scss")
    
    config.assets.precompile += Ckeditor.assets
    
    
    
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
  end
end
