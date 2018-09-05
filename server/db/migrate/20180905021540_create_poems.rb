class CreatePoems < ActiveRecord::Migration[5.2]
  def change
    create_table :poems do |t|
      t.integer :poem_id
      t.string :title
      t.string :content
      t.datetime :created_at

      t.timestamps
    end
  end
end
