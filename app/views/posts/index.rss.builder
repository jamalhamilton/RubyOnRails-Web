xml.instruct!
xml.rss :version => '2.0', 'xmlns:atom' => 'http://www.w3.org/2005/Atom' do

  xml.channel do
    xml.title "Blog | Joynus Staffing"
    xml.description "Get the latest industry scoop and informative knowledge."
    xml.link "https://www.joynus.com/blog.rss"
    xml.language 'en'
    xml.tag! 'atom:link', :rel => 'self', :type => 'application/rss+xml', :href => "https://www.joynus.com/blog.rss"
    @posts.each do |post|
      xml.item do
        xml.title post.social_title
        xml.description post.summary
        xml.pubDate post.created_at.to_s(:rfc822)
        xml.link post_url(post)
        xml.guid post_url(post)
      end
    end
  end
end