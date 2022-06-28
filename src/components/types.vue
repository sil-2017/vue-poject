<template>
  <div class="types">
    <div class="types">
    <div class="types-h"> Մեր Տեսականին</div>
    <div class="types-nav">
        <ul>
             <li
            v-for="(link,index) in links"
            :key="index"
            :link="link">
           <a> {{link}}</a>
            </li>
        </ul>
    </div>
    <div class="types-content">
        <div  
        class="types-card"
        v-for = "index in 4"
        :key="index">
            <img src="../assets/img/image3.png">
            <div class="types-content-txt">
              <h2>{{state.title}}</h2>
            <p>{{state.des}}</p>
            <p>
                {{state.price}}
                <my-button class="bth">Մանրամասն</my-button>
            </p>
            </div>
        </div>
    </div> 
  </div>
  </div>
</template>

<script>
export default {
  name: "types",
  data() {
    return {
        links:[
            'Տեսնել Բոլորը',
            'Թերմո պայուակներ',
            'Թերմո տոպրակներ'
        ],
         state: {
                title: "Թերմո պայուսակ",
                des: "40x24x20 սմ",
                price: "4900 Դր."
            }
       
    };
  },
};
</script>