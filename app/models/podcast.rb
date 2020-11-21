class Podcast < ActiveRecord::Base
    default_scope { order(created_at: :desc)}
    acts_as_taggable_on :tags
    is_impressionable
    extend FriendlyId
    friendly_id :episode_url, use: [:slugged, :history]

##Validations
    validates :episode_title, presence: true
    validates :episode_audio_url, presence: true
    validates :episode_description, presence: true
    validates :episode_url, presence: true
    validates :episode_summary, presence: true, length: 1..330
    
    
## Instance Methods
  def should_generate_new_friendly_id?
    slug.nil? || episode_title_changed?
  end  
  
  
  def raw_podcast
    self.episode_description.html_safe
  end
  
  def self.search_by(search_term)
    where("LOWER(episode_title) LIKE :search_term", search_term: "%#{search_term.downcase}%")
  end  
  
  
end
