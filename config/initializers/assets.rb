# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( industry.css )
Rails.application.config.assets.precompile += %w( application-without-jquery.js team_dashboard/main.js team_dashboard/viewport.js )
Rails.application.config.assets.precompile += %w( team_dashboard/main.css )
Rails.application.config.assets.precompile += %w( ckeditor/config.js ckeditor/styles.js ckeditor/contents.css )
Rails.application.config.assets.precompile += %w( ckeditor/filebrowser/images/*  )
