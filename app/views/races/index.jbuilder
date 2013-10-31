json.races do
  Race.find_each do |race|
    json.child! do
      json.(race, :id, :name, :description, :race_date)
    end
  end
end
