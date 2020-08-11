##  Rails-Forms-REST

### SWBATs

- [x] Discuss and Review Forms
- [x] form_for, form_tag, form_with
- [x] Checking information before creating
- [x] Strong params
- [x] Private keyword [[Read this](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)]
- [x] link_to, button_tag, submit_tag
- [x] before_action
- [x] path helpers
- [x] Refresher on has_many & belongs_to
- [x] Use Rails form helper methods that create an associated object
- [ ] Implement dependent: :destroy in order to destroy associated objects to normalize database

### Deliverables

- Refactor existing application
  - Start with links & navigation
  - Edit form
- Collection Select
  - Explain collection select
- Set up for validations

### Process
- Model
- Migration
  - Test it
- Route
- Controller method
  - Test it
- View
  - Test it
  - Refactor if needed


### Code Snippets

- link_to
  ```rb
    <%= link_to "Edit", edit_user_path(user) %>
  ```

- Collection Select
```rb

  <%= collection_select object, method, collection, value_method, text_method %>

    <select name="object[method]" id="object_method">
      <option value="value_method">text_method</option>
      <option value="value_method">text_method</option>
      ...
    </select>

  <%= f.collection_select method, collection, value_method, text_method  %>

  <%= f.collection_select(:author_id, Author.all, :id, :name) %>
```
