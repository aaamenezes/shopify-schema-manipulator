/* eslint-disable max-len */
import React from 'react'

export default function OutputSection({
  schemaInterfaceSectionInfos,
  schemaInterfaceBlocks
}) {
  return (
    <section className='section'>
      <form className='form'>

        <div className='schema-interface__wrapper'>
          <div className='schema-interface__item schema-interface__section'>
            <h2 className='schema-interface__label schema-interface__label-section'>Section...</h2>
            {schemaInterfaceSectionInfos}
          </div>
          <div className='schema-interface__item schema-interface__blocks'>
            <h2 className='schema-interface__label schema-interface__label-blocks'>Blocks...</h2>
            {schemaInterfaceBlocks}
          </div>
        </div>

        <div className='output-json'>
          <button className='btn btn-primary' type='submit'>GENERATE SCHEMA JSON</button>
          <textarea className='textarea output-textarea' placeholder='Output field' />
          <button className='btn btn-primary copy-btn' type='button'>COPY</button>
          <div className='copy-success-message btn btn-primary btn-black no-events hide'>Copied!</div>
        </div>

      </form>
    </section>
  )
}
