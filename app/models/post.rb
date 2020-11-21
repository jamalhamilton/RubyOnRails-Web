class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :slug_candidates, use: [:slugged, :history]

  belongs_to :preview_image, class_name: 'Ckeditor::Picture'
  belongs_to :author, class_name: 'User'

## Validations
  validates :contents, presence: true
  validates :title, presence: true
  validates :social_title, presence: true
  validates :blog_title, presence: true
  validates :summary, presence: true, length: 1..300
  validates :author, presence: false
  validates :category, presence: true
  delegate :full_name, to: :author, prefix: true, allow_nil: false

## Instance Methods
  def slug_candidates
    [
      :slug_title,
      [:id, :slug_title]
    ]
  end

  def slug_title
    title&.downcase
  end

  def should_generate_new_friendly_id?
      title_changed?
  end

  def raw_post
    self.contents.html_safe
  end

  def preview_image_thumb(dimensions = '100x')
    preview_image.try(:data).try(:thumb, dimensions).try(:url)
  end

  def self.preview_image_dimensions
    '350x'
  end
end
