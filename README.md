# 2024 Google Solution Challenge : Pat(h)-to-Pet
 <img src="https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/104755384/8d5ba6c5-9990-4b64-8c6c-9393f30e6bad" width="520px" alt="logo"/>

Hello, we are the <b>Path to Pet team</b> from GDSC Soongsil University. 🐾


## Member 🐈

|      Sangwon Choi       |         Seohyeon Choi       |       Eunso Ahn       |      Hwangon Jang         |                                                                                                    
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   <img src="https://avatars.githubusercontent.com/u/21211957?v=4" width="170" alt="깃허브계정-프로필사진"> |             <img src="https://avatars.githubusercontent.com/u/104755384?v=4" width="170" alt="깃허브계정-프로필사진">   |   <img src="https://avatars.githubusercontent.com/u/74090200?v=4" width="170" alt="깃허브계정-프로필사진">   |  <img src="https://avatars.githubusercontent.com/u/33739448?v=4" width="170" alt="깃허브계정-프로필사진">  |
|   [@ChoiSangwon](https://github.com/ChoiSangwon)   |    [@candosh](https://github.com/candosh) | [@eunsoA](https://github.com/eunsoA)  | [@HwanGonJang](https://github.com/HwanGonJang)  |
| PM && Frontend | Design && Frontend | Design && Frontend | Backend && AI |

## Related Repository 🐶
- https://github.com/gdsc-ssu/Path-to-Pet-Client
- https://github.com/gdsc-ssu/Path-to-Pet-Server

## Introduction Our Solution 🌎
we've developed a website dedicated to abandoned animals, facilitating the search for lost pets and supporting the UN's Sustainable Development Goal for <b>'Sustainable Cities and Communities.'</b>

## Technology 💻
- The front end was crafted using JavaScript and React, <b>focusing on enhancing development productivity</b> through a design system that organizes the UI into reusable components. This approach, although initially time-consuming, significantly improved <b>reusability, maintenance, and scalability</b>. We utilized styled-components for seamless integration of styles and components, accelerating the development process after setting up the foundational components.

- The backend used FastAPI. Based on the <b>MVC model , we applied a Facade Pattern</b>  to separate the role of the Service Layer and encapsulated the business logic. The language used Python. Python was light and familiar to all of our team members, so it was efficient. As the backend, we used FastAPI, Python's representative backend framework. <b> FastAPI implemented high-performance servers</b>  through light and simple usage.

- And AI implemented image search engine <b> using K-Nearest-Neighbor (KNN) algorithm using Tensorflow</b> . Classification was performed based on the features of the input image, and the most similar n images were selected using Euclidean distance. For the lightest and fastest computation possible, we used Keras' ResNet50 Convolution neural network from Tensorflow and implemented <b> KNN algorithm using scikit-learn</b> . At this time, <b> PCA reduced the dimension to reduce the data size and reduce the computational cost for efficient learning.</b>

## UI ⭐️
- Upon visiting our site, users choose between dogs and cats.
<img src="https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/104755384/1f4d217b-c9a2-4625-9290-2bffef003123" width="520px" alt="page"/>

- The next screen provides options to register found abandoned animals, search for lost pets using photos, and browse a complete list of abandoned animals.
<img src="https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/104755384/dec7e963-695a-4b1c-b867-bc930d792847" width="520px" alt="page"/>

https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/21211957/1603e16b-086e-4a6c-a6ba-38192fa54093

- The button , "I lost my dog" allows users to upload a photo of their lost pet, displaying animals similar to the photo and providing shelter contact information to offer a chance for reunion.
<img src="https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/104755384/f6426beb-dc7a-4cd3-a7cf-65c2df1a3b6d" width="400px" alt="page"/>
<img src="https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/104755384/2fea17a8-77ce-4578-87a2-b1e351b108b7" width="400px" alt="page"/>

https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/21211957/1209d282-c2ac-4bc5-adb8-26a7a5d9691d

- Additionally, anyone who finds an abandoned animal can register it with details like photos and location, assisting in its rescue and adoption.
<img src="https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/104755384/2647b282-2f98-4fef-90a8-094f1d2df3a8" width="520px" alt="page"/>

- The entire list of abandoned animals can be searched by date, gender, neutralization, and breed, ensuring detailed access to all protected animals.
<img src="https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/104755384/55a7788e-448c-4bb8-8236-7defb4c6e9bc" width="400px" alt="page"/>
<img src="https://github.com/gdsc-ssu/Path-to-Pet-Client/assets/104755384/a3f7794f-7a88-4785-8ae4-9bbae25d9d55" width="400px" alt="page"/>



## Our team's goal 👊
This initiative aims to reduce the number of abandoned animals, ease the financial and environmental strain on shelters and governments, and <b> foster a sustainable, animal-friendly community.</b> 






