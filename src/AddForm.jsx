function AddForm({ handleSubmit, setName, name }) {

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center my-5'>
      <div>
        <label className='font-bold block text-center'>Enter Choice</label>
        <input
          name='name'
          type='text'
          value={name}
          placeholder='where do you want to...'
          onChange={() => setName(event.target.value)}
        />
      </div>
      <button
        className='bg-green-500 hover:bg-green-700 mt-5 text-white font-semibold font-medium py-2 px-4 rounded border-none capitalize'
        type='submit'
      >
        Add to the list
      </button>
    </form>
  )
}

export default AddForm;
