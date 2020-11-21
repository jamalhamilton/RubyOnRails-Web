class AddCategoryColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :category, :text
    add_index :posts, :category
  end
end
