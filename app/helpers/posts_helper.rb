module PostsHelper
  def preview_image_options
    Ckeditor::Picture.order('id desc').limit(50).map do |image|
      [image.data.name, image.id, {'data-img-src' => image.try(:data).try(:thumb, '100x').try(:url) }]
    end.prepend(['Select', nil, {}])
  end

  def author_options
    users = User.all.map { |u| [u.full_name, u.id] }
    users.prepend(['Please select author', nil])
  end
  
  
  
  
end
