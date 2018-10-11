import React from 'react'

// SeoPanel :: Props -> React.Component
export default ({
  close,
  isOpening,
}) =>
  <section className={`panel seo-panel ${isOpening ? 'opening' : ''}`}>
    <form onSubmit={close}>
      <div className="field">
        <label>Title</label>
        <input type="text" name="title"/>
      </div>
      <div className="field">
        <label>Description</label>
        <textarea name="description" />
      </div>
      <button className="close">Save</button>
    </form>
  </section>
