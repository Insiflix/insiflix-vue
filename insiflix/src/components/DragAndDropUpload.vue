<template>
    <div class="container">
  <div class="card">
    <div class="drop_box">
      <header>
        <h4>Select File here</h4>
      </header>
      <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
      <input @change="(event) => handleFileData(event)" type="file" hidden accept=".mp4,.docx,.pdf" id="fileID" style="display:none;">
      <button class="btn">Choose File</button>
    </div>

  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            dropArea: "",
            button: "",
            dragText: "",
            input: "",
            file: "",
            filename: "",
        }
    },
    methods: {
        handleFileData: function(){
            this.fileName = e.target.files[0].name;
            let filedata = `
            <div class="form">
            <h4>${this.fileName}</h4>
            <input type="email" placeholder="Enter email upload file">
            <button class="btn">Upload</button>
            </div>`;
            this.dropArea.innerHTML = filedata;
        },
    },
    mounted() {
        this.dropArea = document.querySelector(".drop_box"),
        this.button = this.dropArea.querySelector("button"),
        this.dragText = this.dropArea.querySelector("header"),
        this.input = this.dropArea.querySelector("input");
        this.button.onclick = () => { this.input.click(); };

    },
}
</script>

<style lang="scss" scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: start;
}

.card {
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  width: 600px;
  height: 260px;
  background-color: rgb(51, 51, 51);
  padding: 2rem;
}

.card h3 {
  font-size: 22px;
  font-weight: 600;
  color: white
  
}

.drop_box {
  margin: 10px 0;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px dotted #a3a3a3;
  border-radius: 5px;
}

.drop_box h4 {
  font-size: 16px;
  font-weight: 400;
  color: white;
}

.drop_box p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #a3a3a3;
}

.btn {
  text-decoration: none;
  background-color: #005af0;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  outline: none;
  transition: 0.3s;
}

.btn:hover{
  text-decoration: none;
  background-color: #ffffff;
  color: #005af0;
  padding: 10px 20px;
  border: none;
  outline: 1px solid #010101;
}
.form input {
  margin: 10px 0;
  width: 100%;
  background-color: #e2e2e2;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 4px;
}</style>