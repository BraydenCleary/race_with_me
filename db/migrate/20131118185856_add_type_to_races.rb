class AddTypeToRaces < ActiveRecord::Migration
  def change
    add_column :races, :race_type, :string
  end
end
