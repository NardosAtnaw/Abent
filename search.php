<?php include './includes/db.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <script src="https://unpkg.com/vue@3.0.2"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
    <title>Laws  | Abent Law Office</title>
  </head>

  <body>
    <header id="app" class="header">
      <nav class="nav" id="nav">
      </nav>
      <section class="laws-banner">
        <div class="law-banner-content">
          <h1 class="law-banner-title text-center">
            Legal Resources
          </h1>
          <form action="search.php" method="post">

            <div class="input-container">
              <button type="submit" name="submit" class="search-button"><img src="./img/search.svg" class="icon" alt="" /></button>
              <input class="input-field" type="search" placeholder="Search here..." name="search" />
            </div>
          </form>

        </div>
      </section>
    </header>
    <section class="categories">
      <div class="container">
      <div class="btn-container">
      <?php include './includes/sidebar.php'; ?>
      </div>
      </div>
    </section>

    <section class="laws laws-marign">
    <div class="laws-cards container" id="laws1">
    <?php
        if (isset($_POST['submit'])) {
          $search = $_POST['search'];

          $query = "SELECT * FROM posts WHERE post_tags LIKE '%$search%'";
          $search_result = mysqli_query($connection, $query);

          if (!$search_result) {
            die("Query Failed" . mysqli_error($connection));
          }
          $count = mysqli_num_rows($search_result);

          if ($count == 0) {
            echo "<div class='container'>";
            echo "<h1> No result</h1>";
            echo "</div>";
          } else {

            while ($row = mysqli_fetch_assoc($search_result)) {
              $post_id = $row['post_id'];
              $post_title = $row['post_title'];
              $post_date = $row['post_date'];
              $post_content = substr($row['post_content'],0,157);
              $post_image = $row['post_image'];
              $post_duration = $row['post_duration']
        ?>
             
          <div class="law-card">
            <img src="./post_img/<?php echo $post_image; ?>" class="law-card-img" alt="">

            <div class="container">
              
              <p class="law-card-date"><?php echo $post_date; ?></p>
  
              <h2 class="law-card-title"><?php echo $post_title; ?></h2>
            </div>

          </div>
         
        

        <?php
            }
          }
        }
        ?>
</div>
   


</section>
<footer id="footer" class="footer laws-footer"></footer>

<script src="./js/app.js"></script>
</body>
</html>
