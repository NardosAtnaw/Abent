<table class="table table-bordered table-hover col-12" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
      <th>Id</th>
      <th>Author</th>
      <th>Comment</th>
      <th>Email</th>
      <th>Status</th>
      <th>In Response to </th>
      <th>Date</th>
      <th>Approve</th>
      <th>Unapprove</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>

    <?php

    $query = "SELECT * FROM comments";
    $comment_result = mysqli_query($connection, $query);

    while ($row = mysqli_fetch_assoc($comment_result)) {
      $comment_id = $row['comment_id'];
      $comment_post_id = $row['comment_post_id'];
      $comment_author = $row['comment_author'];
      $comment_email = $row['comment_email'];
      $comment_content = $row['comment_content'];
      $comment_status = $row['comment_status'];
      $comment_date = $row['comment_date'];

      echo "<tr>";
      echo "<td>{$comment_id}</td>";
      echo "<td>{$comment_author}</td>";
      echo "<td>{$comment_content}</td>";
      echo "<td>{$comment_email}</td>";
      echo "<td>{$comment_status}</td>";

      $query = "SELECT * FROM posts WHERE post_id = $comment_post_id";
      $comment_post = mysqli_query($connection, $query);

      while ($row = mysqli_fetch_assoc($comment_post)) {
        $post_title = $row['post_title'];

        echo "<td><a href='../singleBlog.php?post_id=$comment_post_id'>$post_title</a></td>";
      }

      echo "<td>{$comment_date}</td>";
      echo "<td><a href='comments.php?approve=$comment_id'>Approve</a></td>";
      echo "<td><a href='comments.php?unapprove=$comment_id'>Unapprove</a></td>";
      echo "<td><a href='comments.php?delete_comment=$comment_id'>Delete</a></td>";
      echo "</tr>";
    }


    ?>

  </tbody>
</table>

<?php


if (isset($_GET['unapprove'])) {
  $the_comment_id = escape($_GET['unapprove']);
  $query = "UPDATE comments SET comment_status = 'unapproved' WHERE comment_id = $the_comment_id";
  $result = mysqli_query($connection, $query);

  confirm($result);
  header("Location: ./comments.php");
}

if (isset($_GET['approve'])) {
  $the_comment_id = escape($_GET['approve']);
  $query = "UPDATE comments SET comment_status = 'approved' WHERE comment_id = $the_comment_id";
  $result = mysqli_query($connection, $query);

  confirm($result);
  header("Location: ./comments.php");
}

if (isset($_GET['delete_comment'])) {
  $the_comment_id = escape($_GET['delete_comment']);
  $query = "DELETE FROM comments WHERE comment_id = $the_comment_id";
  $result = mysqli_query($connection, $query);

  confirm($result);
  header("Location: ./comments.php");
}
?>