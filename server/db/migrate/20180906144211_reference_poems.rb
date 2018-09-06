class ReferencePoems < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :poem_id, :integer
  end
end
