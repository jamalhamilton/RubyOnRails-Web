class AddPublishedDateToPodcasts < ActiveRecord::Migration
  def change
    add_column :podcasts, :published_date, :date
  end
end
