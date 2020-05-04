class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title
      t.integer :user_id
      t.text :description

      t.timestamps
    end
  end
end
