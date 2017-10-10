class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.references :project, foreign_key: true
      t.text :text
      t.boolean :isCompleted

      t.timestamps
    end
  end
end
