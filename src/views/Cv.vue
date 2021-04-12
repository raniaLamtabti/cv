<template>
  <div class="container">
    <div class="cv">
      <h2>{{ description }}</h2>
      <h1>{{ name }}</h1>
      <h2>{{ email }}</h2>
      <h1>{{ adress }}</h1>
      <h2>{{ phone }}</h2>
      <h1>{{ github }}</h1>
      <h3>EXPERIENCE</h3>
      <div v-for="(experience, index) in experiences" :key="index">
        <div class="contents">
          <h4>{{ experience.COMPANY }}</h4>
          <h5>
            {{ experience.POST }} |
            <span> {{ experience.FROM }} - {{ experience.TO }} </span>
          </h5>
          <p>{{ experience.POST_DESC }}</p>
        </div>
        <br />
      </div>

      <h3>EDUCATION</h3>
      <div v-for="(education, index) in educations" :key="index">
        <div class="contents">
          <h4>{{ education.UNIVERSITY }}</h4>
          <h5>
            {{ education.BRANCH }} |
            <span>{{ education.FROM }} - {{ education.TO }}</span>
          </h5>
        </div>
        <br />
      </div>

      <!-- <h3>SKIILS</h3>
      <ul class="skills">
        <li v-for="(skill, index) in skills" :key="index">
          {{ index + 1 }} - {{ skill }}
        </li>
      </ul> -->

      <h1>ABOUT ME</h1>
      <p class="aboutMe">{{ about }}</p>
    </div>
    <button class="btn btn-warning" @click.prevent="downloadPDF">
        PDF
      </button>

  </div>
</template>
<script>
  import jsPDF from 'jspdf'
  export default {
    name: "About",
    data() {
      return {
        name: this.$store.state.name,
        description: this.$store.state.desc,

        email: this.$store.state.email,
        phone: this.$store.state.phone,
        adress: this.$store.state.adress,
        github: this.$store.state.github,

        experiences: this.$store.state.experinceList[0],

        educations: this.$store.state.educationList[0],

        // skills: this.$store.state.skillsList[0],

        about: this.$store.state.about,
      };
    },
    methods: {
      downloadPDF: function () {
        var pdf = new jsPDF(); 
        pdf.html(window.document.getElementsByClassName("cv")[0], {
          callback: function (pdf) {
            pdf.save();
          },
          x: 10,
          y: 10
        });
      }
    }
  }
</script>