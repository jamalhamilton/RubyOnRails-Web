class AddSummaryToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :summary, :text
    add_index :posts, :summary
  end
end
