class AddSocialTitleColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :social_title, :text
    add_index :posts, :social_title
  end
end
