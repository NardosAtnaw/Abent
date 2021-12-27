<?php include './includes/db.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <script src="https://unpkg.com/vue@3.0.2"></script>
    <title>Legal Resources  | Abent Law Office</title>
  </head>

  <body>
    <header id="app" class="header">
      <nav class="nav" id="nav">
        
      </nav>

      <section class="laws-banner">
       
      </section>
    </header>

    <section class="main-text">
      <div class="container row">
        <aside class="side-links col-lg-3" id="aside">
         
        </aside>
        <div class="content col-lg-5">
        <?php

if (isset($_GET['post_id'])) {
  $post_id = $_GET['post_id'];

  $query = "SELECT * FROM posts WHERE post_id = $post_id ";
  $single_result = mysqli_query($connection, $query);

  while ($row = mysqli_fetch_assoc($single_result)) {
    $post_title = $row['post_title'];
    $post_date = $row['post_date'];
    $post_content = $row['post_content'];
    $post_image = $row['post_image'];
    $post_duration = $row['post_duration'];
?>
     

          <h1 class="service-title"> <?php echo $post_title; ?></h1>

          <img src="./post_img/<?php echo $post_image; ?>" alt="">

          <p>
          <?php echo $post_content; ?>
          </p>
         
        </div>
        <?php } }?>

        <aside class="side-contact col-lg-3" id="side-contact">
          
        </aside>
       
      </div>
     
    </section>

    <footer class="footer" id="footer"></footer>

    <script src="./js/app.js"></script>
  </body>
</html>
