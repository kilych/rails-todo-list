# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

seed_file = Rails.root.join('db', 'seeds.yml')
seeds = YAML::load_file(seed_file).with_indifferent_access

seeds['projects'].each do |pr|
  project = Project.create title: pr['title']
  project.todos = Todo.create(pr['todos'])
end
