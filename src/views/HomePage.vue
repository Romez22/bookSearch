<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start">BookSearch</ion-title>
      </ion-toolbar>
      <ion-searchbar placeholder="Enter Book Name" v-model="bookName" ></ion-searchbar> <!--v-on:ionChange="search()"-->
      <ion-button expand="block" @click="search()">Find Book</ion-button>
    </ion-header>
    
    <ion-content>
      
    
        <ion-list >

          <div  v-for="book in bookList" v-bind:key="book.id" id="thelist">
            <ion-item lines="none">
              <ion-thumbnail slot="start"> 
              <img  v-if="(book.volumeInfo).hasOwnProperty('imageLinks')" :src="book.volumeInfo?.imageLinks.smallThumbnail"  alt=""/>
            
            </ion-thumbnail>
              <ion-label slot="start" style="width: 100%;">
              <h5><strong>{{book.volumeInfo.title}}</strong></h5>

            </ion-label>
            </ion-item>
            
           
              <ion-label  slot="start"><h6><strong>Author(s)</strong>{{book.volumeInfo.authors}}</h6></ion-label>


          </div>
        </ion-list>
    </ion-content>
</template>

<script  lang="ts">
import { IonContent, IonButton,IonSearchbar,IonTitle,IonToolbar,IonHeader,IonList,IonItem, IonLabel,IonThumbnail } from '@ionic/vue';
//import { Method } from 'ionicons/dist/types/stencil-public-runtime';
import { defineComponent, ref } from 'vue';
import axios from 'axios';



export default defineComponent({
  
    components: { IonButton, IonContent, IonSearchbar,IonTitle,IonToolbar,IonHeader,IonList, IonItem, IonLabel,IonThumbnail  },
    created() {
    console.log(this.$attrs)
  },
    inheritAttrs: false,
    setup() {
      const content = ref("");  

      return { content, };
    },
    methods:{
       async search (){      
        console.log(this.bookName);       
        if(this.bookName!=''){
          const r2= await axios.get('https://www.googleapis.com/books/v1/volumes?q='+this.bookName+'&maxResults=40');
        this.bookList=r2.data.items;
        console.log(r2.data.items);
        }
       
    },
  },
  data(){
    return{
      bookName:'',
      bookList:[] as any[]
    }
  },

});

</script>


<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#thelist{
  border-bottom: solid 1px lightgray;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 5px;
  padding: 4px;

}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
