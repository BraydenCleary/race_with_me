json.races do
  Race.find_each do |race|
    json.child! do
      json.(race, :id, :name, :description, :race_date, :race_type)
    end
  end
end
