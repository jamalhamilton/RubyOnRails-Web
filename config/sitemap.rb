# config/sitemap.rb
SitemapGenerator::Sitemap.default_host = "https://www.joynus.com" # Your Domain Name
SitemapGenerator::Sitemap.public_path = 'tmp/sitemap'
# Where you want your sitemap.xml.gz file to be uploaded.
SitemapGenerator::Sitemap.adapter = SitemapGenerator::S3Adapter.new( 
aws_access_key_id: ENV["S3_ACCESS_KEY"],
aws_secret_access_key: ENV["S3_SECRET_ACCESS_KEY"],
fog_provider: 'AWS',
fog_directory: ENV["S3_SITEMAP_NAME"],
fog_region: ENV["S3_REGION"]
)

# The full path to your bucket
SitemapGenerator::Sitemap.sitemaps_host = "https://#{ENV["S3_SITEMAP_NAME"]}.s3.us-east-2.amazonaws.com"
# The paths that need to be included into the sitemap.
SitemapGenerator::Sitemap.create do
  add '/about'
  add '/services'
  add '/blog'
  add '/contact'
  add '/get_talent'
  add '/mbe-affiliations'
  add '/staffing'
  add '/directhire'
  add '/rpo'
  add '/consultation'
  add '/staffing/onsite'
  add '/staffing/highvolume'
  add '/specialization/accounting'
  add '/specialization/healthcare'
  add '/specialization/manufacturing'
  add '/specialization/it'
  
  Post.find_each do |post|
    add post_path(id: post.to_param), :lastmod => post.created_at
  end  
  
  
  #   Article.find_each do |article|
  #     add article_path(article), :lastmod => article.updated_at
  #   end

  # Put links creation logic here.
  #
  # The root path '/' and sitemap index file are added automatically for you.
  # Links are added to the Sitemap in the order they are specified.
  #
  # Usage: add(path, options={})
  #        (default options are used if you don't specify)
  #
  # Defaults: :priority => 0.5, :changefreq => 'weekly',
  #           :lastmod => Time.now, :host => default_host
  #
  # Examples:
  #
  # Add '/articles'
  #
  #   add articles_path, :priority => 0.7, :changefreq => 'daily'
  #
  # Add all articles:
  #
  #   Article.find_each do |article|
  #     add article_path(article), :lastmod => article.updated_at
  #   end
end

