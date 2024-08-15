// src/components/Research.js
import React from 'react';
import './Research.css';

const Research = () => {
  return (
    <div className="research-container">
      <h1>Research</h1>
      
      <p className="intro">
        Welcome to my Research Page! My journey in the expansive realm of research is rooted in the 
        intersection of Artificial Intelligence (AI) and Human-Computer Interaction (HCI). I am deeply 
        passionate about creating AI solutions tailored to enhance, simplify, and innovate the ways humans 
        interact with technology. My work aims not just to push the boundaries of what machines can do, but 
        also to ensure they do so in ways that are intuitive and enriching for users. If you share this vision or 
        have related opportunities, please connect with me!
      </p>

      <div className="research-item">
        <h2>Music Genre Classification with ResNet and Bi-GRU Using Visual Spectrograms</h2>
        <p>The University of Melbourne</p>
        <p>2023</p>
        <div className="icons">
          <span>🔽</span>
          <span>🔗</span>
          <span>🐙</span>
        </div>
        <p>
          Music recommendation systems have emerged as a vital component to enhance user experience and satisfaction 
          for the music streaming services, which dominates music consumption. The key challenge in improving these 
          recommender systems lies in comprehending the complexity of music data, specifically for the underpinning 
          music genre classification. The limitations of manual genre classification have highlighted the need for a more 
          advanced system, namely the Automatic Music Genre Classification (AMGC) system. While traditional machine 
          learning techniques have shown potential in genre classification, they heavily rely on manually engineered 
          features and feature selection, failing to capture the full complexity of music data. On the other hand, deep 
          learning classification architectures like the traditional Convolutional Neural Networks (CNN) are effective in 
          capturing the spatial hierarchies but struggle to capture the temporal dynamics inherent in music data. To address 
          these challenges, this study proposes a novel approach using visual spectrograms as input, and propose a hybrid 
          model that combines the strength of the Residual neural Network (ResNet) and the Gated Recurrent Unit 
          (GRU). This model is designed to provide a more comprehensive analysis of music data, offering the 
          potential to improve the music recommender systems through achieving a more comprehensive analysis of 
          music data and hence potentially more accurate genre classification.
        </p>
      </div>

      <div className="research-item">
        <h2>Visual, Auditory, and Haptic Cue Navigation Techniques for Object Tracking in VR Gameplay</h2>
        <p>The University of Copenhagen</p>
        <p>2022 - 2023</p>
        <div className="icons">
          <span>🔗</span>
          <span>🐙</span>
        </div>
        <p>
          The task of finding a hidden input is ubiquitous in 3D Virtual Reality (VR) games or applications, where a 
          navigation technique is needed to guide the users to the target. However, integrating sensory cues to 
          navigation is an arduous task for game developers due to the difficulties in balancing the sensory output 
          aroused to the user, as well as the unclear interactions between different types of sensory feedback when 
          applied together. In this report, we investigate the impact of different types of sensory cue navigation 
          techniques as well as their combinations to the users' in-game performance and their likability to the 
          feedback approach. We present a study of visual, auditory, and haptic feedback navigation techniques in 
          guiding the user to find a hidden target. We implement three interaction techniques and four 
          different combinations of sensory cue navigation techniques to investigate the players' in-game 
          performance and likability. Our hypothesis is that multi-sensory feedback navigation is more effective 
          than simple visual cue navigation in terms of the users' performance. The results of this study is significant to 
          VR game or application developers in providing more appropriate feedback cues when navigating the player.
        </p>
      </div>

      <div className="research-item">
        <h2>Diabetic Retinopathy Detection Using GNN-Transformed Routing CapsNets</h2>
        <p>2022</p>
        <div className="icons">
          <span>🔽</span>
        </div>
        <p>
          Diabetic retinopathy (DR) is a complication of diabetes; it is one of the major causes of blindness 
          affecting over 93 million people. Symptoms including vision loss and blindness can be effectively 
          controlled if the lesion is detected timely. Nevertheless, the current manual diagnosis of the disease 
          through the digital photographs of the retina is very time-consuming, leading to delayed and erroneous 
          diagnoses. An alternative, more intelligent and automatic way is to detect the lesion of the retina using 
          multi-image classification, in which the convolutional neural network (CNN) is used as the traditional 
          model. This paper endeavors to develop a model referencing the Residual Network (ResNet) and 
          Capsule Network (CapsNet) with graph neural network (GNN) transformed routing. An open-source 
          dataset on Kaggle platform (Kaggle APTOS 2019) is employed for training and testing. Finally, a test 
          accuracy of 85.29% is yielded, with precision 79.88% , recall 68.79% , and AUC 94.71% . The results 
          demonstrate competitive statistics with those of the state-of-the-art models.
        </p>
      </div>

      <div className="research-item">
        <h2>Machine-Learning Prediction of the Computed Band Gaps of Double Perovskite Materials</h2>
        <p>2021</p>
        <div className="icons">
          <span>🔽</span>
          <span>🔗</span>
          <span>🐙</span>
        </div>
        <p>
          Prediction of the electronic structure of functional materials is essential for the engineering of new 
          devices. Conventional electronic structure prediction methods based on density functional theory (DFT) 
          suffer from not only high computational cost, but also limited accuracy arising from the approximations 
          of the exchange-correlation functional. Surrogate methods based on machine learning have attracted 
          much attention as a viable alternative to bypass these limitations, especially in the prediction of solid-
          state band gaps, which motivated this research study. Herein, we construct a random forest regression 
          model for band gaps of double perovskite materials, using a dataset of 1306 band gaps computed with 
          the GLLBSC (Gritsenko, van Leeuwen, van Lenthe, and Baerends solid correlation) functional. Among 
          the 20 physical features employed, we find that the bulk modulus, superconductivity temperature, and 
          cation electronegativity exhibit the highest importance scores, consistent with the physics of the 
          underlying electronic structure. Using the top 10 features, a model accuracy of 85.6% with a root mean 
          square error of 0.64 eV is obtained, comparable to previous studies. Our results are significant in the 
          sense that they attest to the potential of machine learning regression for the rapid screening of 
          promising candidate functional materials.
        </p>
      </div>
    </div>
  );
};

export default Research;