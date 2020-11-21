class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :contents
      t.string :author
      t.boolean :approved

      t.timestamps
    end
    
    add_index :posts, :title
    add_index :posts, :contents
    add_index :posts, :author
    add_index :posts, :approved
    
  end
end
