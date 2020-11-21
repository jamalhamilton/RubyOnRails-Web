Rails.application.routes.draw do
  
  #get "/blog/turnover-is-inevitable-here-s-how-you-can-manage-it-better", to: redirect("https://blog.joynus.com/turnover-is-inevitable-heres-how-you-can-manage-it-better")
  #get "/blog/contingent-staffing-is-it-right-for-your-business", to: redirect("https://blog.joynus.com/using-contingent-staffing-in-business")
  #get "/blog/inside-the-importance-of-workplace-safety-public-relations", to: redirect("https://blog.joynus.com/importance-of-public-relations")
  #get "/blog/the-benefits-of-acuity-based-staffing", to: redirect("https://blog.joynus.com/benefits-of-acuity-based-staffing")
  #get "/blog/form_i-9_policy_covid-19_guide", to: redirect("https://blog.joynus.com/covid-19_i-9_policy")
  #get "/blog/3-ways-that-ai-makes-recruiting-more-human", to: redirect("https://blog.joynus.com/ways-that-ai-makes-recruiting-more-human")
  #get "/blog/implications_supreme_court_ruling_lgbtq_community", to: redirect("https://blog.joynus.com/implications_supreme_court_ruling_lgbtq_community")
  #get "/blog/management-mistakes-you-might-not-know-you-re-making", to: redirect("https://blog.joynus.com/management-mistakes-you-might-be-making")
  #get "/blog", to: redirect("https://blog.joynus.com")
  #get "/blog(/*what)", to: redirect("https://blog.joynus.com/%{what}")
  
  get '/sitemap.xml.gz', to: redirect("https://s3-us-east-2.amazonaws.com/sitemap-joynus/sitemap.xml.gz")
  #scope "(:locale)", locale: /en|es|kr/, defaults: {locale: "en"} do
  scope "(:locale)", locale: /en|kr/ do
    mount Ckeditor::Engine => "/ckeditor"
    get "login", to: "sessions#new", as: "login"
    get "logout", to: "sessions#destroy", as: "logout"
    match "/send_mail", to: "contact#send_mail", via: "post"

    root to: "home#index"
    get "specialization/accounting"
    get "specialization/healthcare"
    get "specialization/manufacturing"
    get "specialization/it"
    get "staffing/highvolume"
    get "staffing/onsite"
    get "posts/rss"
    get "about/history"
    get "about/career"
    get "about/meet_the_team"
    
    resources :welcome, only:[:index] #chrome notification
    resources :mobile_clockin, only:[:index]
    resources :faq, only:[:index]
    resources :podcasts
    resources :get_talent, only:[:index]
    resources :thankyou, only: [:index]
    resources :mbe_affiliations, path: "mbe-affiliations"
    resources :posts, path: "blog"
    resources :signup, only: [:index]
    resources :apply, only: [:index]
    resources :sessions, only: [:new, :create, :destroy]
    resources :about, only: [:index]
    resources :contact, only: [:index]
    resources :services, only: [:index]
    resources :staffing, only: [:index]
    resources :privacy_policy, only: [:index]
    resources :directhire, only: [:index]
    resources :consultation, only: [:index]
    resources :rpo, only: [:index]
    resources :staff, only: [:index]
    resources :users
  end

  get "*path", to: redirect("/#{I18n.default_locale}/%{path}"), constraints: lambda { |req| !req.path.starts_with? "/#{I18n.default_locale}/" }
  get "", to: redirect("/#{I18n.default_locale}")
end
