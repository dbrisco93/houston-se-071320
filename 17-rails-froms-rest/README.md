##  Rails-Forms-REST

### SWBATs

- [x] Discuss and Review Forms
- [x] form_for
- [x] form_tag
- [x] link_to, button_tag, submit_tag
- [ ] Refresher on has_many and belongs_to
- [ ] before_action
- [x] Checking information before creating
- [x] Strong params
- [x] Private keyword [[Read this](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)]

### Deliverables

- Create a new application
- Build CRUD using REST
- Mass Assignment
- Refactor with before_action


### Code Snippets

- Creating a user
```rb
  @user = User.create(
    fname: params[:user][:fname],
    lname: params[:user][:lname],
    favcolor: params[:user][:favcolor]
  )
  redirect_to users_path
```

- form_for
```rb
    <%= form_for @user, method: :post do |f| %>
      First name: <%= f.text_field :fname %><br />
      Last name : <%= f.text_field :lname %><br />
      Fav Color : <%= f.text_field :favcolor %><br />
      <%= f.submit %>
    <% end %>
  ```

- form_tag
  ```rb
    <%= form_tag user_path, method: :patch do %>
      <%= text_field_tag :'user[fname]', @user.fname %>
      <%= text_field_tag :'user[lname]', @user.lname %>
      <%= text_field_tag :'user[favcolor]', @user.favcolor %>
      <%= submit_tag %>
    <% end %>
  ```

- link_to
  ```rb
    <%= link_to "Edit", edit_user_path(user) %>
  ```
