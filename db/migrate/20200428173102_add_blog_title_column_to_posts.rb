class AddBlogTitleColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :blog_title, :text
    add_index :posts, :blog_title
  end
end
