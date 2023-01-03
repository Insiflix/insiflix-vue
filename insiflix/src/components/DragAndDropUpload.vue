<template>
    <div class="container">
  <div class="card">
    <div class="drop_box">
      <header>
        <h4>{{description}}</h4>
      </header>
      <p :id="identity + '_text'">{{ supported }} </p>
      <input :name="identity" @change="(e) => handleFileData(e)" type="file" :id="identity +'_input'" :accept="accepted" v-bind="required" class="hidden-input">
      <button @click="(e) => clickInput(e)" class="btn">Choose File</button>
    </div>

  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            supportedText: "",
            dropArea: "",
            button: "",
            dragText: "",
            input: "",
            file: "",
            filename: "",
        }
    },
    props: ['accepted', 'description', 'supported', 'identity', 'required'],
    methods: {
        handleFileData: function(e){
            let fileName = e.target.files[0].name;
            console.log(this.fileName);
            console.log(this.supportedText);
            this.supportedText.innerText = fileName;
            
        },
        clickInput(e){
            e.preventDefault();
            this.input.click()
        }
    },
    mounted() {
        this.dropArea = document.querySelector(".drop_box"),
        this.supportedText = document.querySelector(`#${this.identity}_text`),
        console.log( this.supportedText);
        this.button = this.dropArea.querySelector("button"),
        this.dragText = this.dropArea.querySelector("header"),
        this.input = document.querySelector(`#${this.identity}_input`);
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
  width: 100%;
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
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
}
.hidden-input{
    height: 10px;
    position: absolute;
    opacity: 0;
    top: 160px;
    width: 1px;
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