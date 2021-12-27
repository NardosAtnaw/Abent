<?php include './includes/db.php'; ?>



<?php

$query = "SELECT * FROM posts WHERE post_status = 'published' ORDER BY post_id DESC";
$result = mysqli_query($connection, $query);

while ($row = mysqli_fetch_assoc($result)) {
  $post_id = $row['post_id'];
  $post_title = $row['post_ttrfitle'];
  $post_date = $row['post_date'];
  $post_content = substr($row['post_content'],0,157);
  $post_image = $row['post_image'];
  $post_duration = $row['post_duration'];
?>

          <div class="law-card">
            <img src="./post_img/<?php echo $post_image; ?>" class="law-card-img" alt="">

            <div class="container">
              
              <p class="law-card-date"><?php echo $post_date; ?></p>
  
              <a href="./singleBlog.php?post_id=<?php echo $post_id ?>"><h2 class="law-card-title"><?php echo $post_title; ?></h2></a>
            </div>

          </div>
         
        

<?php }
?>