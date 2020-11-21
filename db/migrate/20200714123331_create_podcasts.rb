class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string :episode_url
      t.string :episode_title
      t.text :episode_description
      t.string :episode_audio_url
      t.text :episode_summary

      t.timestamps
    end
    
    add_index :podcasts, :episode_url
    add_index :podcasts, :episode_title
    add_index :podcasts, :episode_description
    add_index :podcasts, :episode_audio_url
    add_index :podcasts, :episode_summary
    
  end
end
