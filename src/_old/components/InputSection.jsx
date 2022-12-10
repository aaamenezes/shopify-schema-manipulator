import React from 'react'

export default function InputSection({ inputJson, setInputJson }) {
  function handleReset() {
    $inputTextarea.value = '{}'
    clearSchemaInterface()
    $outputTextarea.value = ''
  }

  return (
    <section className='section'>
      <form className='form'>

        <textarea
          className='textarea input-textarea'
          name='input-textarea'
          placeholder='Input field'
          onChange={event => setInputJson(event.target.value)}
          value={inputJson}
        />

        <div className='btn-wrapper'>

          <button
            className='btn btn-secondary reset-btn'
            type='button'
            onClick={handleReset}
          >
            RESET DATA
          </button>

          <button className='btn btn-primary' type='submit'>
            GENERATE SCHEMA INTERFACE
          </button>

        </div>

      </form>
    </section>
  )
}
