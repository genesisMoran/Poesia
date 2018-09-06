class RemovePoemId < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :poem_id
  end
end
