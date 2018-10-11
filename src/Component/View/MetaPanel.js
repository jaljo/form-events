import React from 'react'

// MetaPanel :: Props -> React.Component
export default ({
  close,
  isOpening,
}) =>
  <section className={`panel meta-panel ${isOpening ? 'opening' : ''}`}>
    <form onSubmit={close}>
      <div className="field">
        <label>Slug</label>
        <input type="text" name="slug"/>
      </div>
      <div className="field">
        <label>Short title</label>
        <input type="text" name="shortTitle"/>
      </div>
      <button className="close">Save</button>
    </form>
  </section>
