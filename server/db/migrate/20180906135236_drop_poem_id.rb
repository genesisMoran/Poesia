class DropPoemId < ActiveRecord::Migration[5.2]
  def change
    remove_column :poems, :poem_id
  end
end
