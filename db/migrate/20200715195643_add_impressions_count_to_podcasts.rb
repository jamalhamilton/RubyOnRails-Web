class AddImpressionsCountToPodcasts < ActiveRecord::Migration
  def change
    add_column :podcasts, :impressions_count, :integer
  end
end
