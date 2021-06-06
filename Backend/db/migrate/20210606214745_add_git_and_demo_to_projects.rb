class AddGitAndDemoToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :git, :string
    add_column :projects, :demo, :string
  end
end
