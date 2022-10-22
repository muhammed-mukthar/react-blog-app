import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="writeImage" alt="" />
        <form className="writeForm">
<div className="writeFormGroup">
    <label htmlFor="fileInput"><i className=" writeIcon    fa-solid fa-plus"></i></label>
    <input type="file" style={{display:"none"}} id="fileInput"  />
    <input type="text" className="writeInput" autoFocus={true} placeholder="Title"/>
</div>
<div className="writeFormGroup">
    <textarea placeholder="tell your story.." type="text" className="writeInput writeText"></textarea>
</div>
<button className="writeSubmit">Publish</button>
        </form>
        </div>
  )
}
