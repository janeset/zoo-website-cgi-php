<!DOCTYPE html>
<!--/*
* FILE : animals.php
* PROJECT : PROG2001 - Assignment #3
* PROGRAMMER : Janeth Santos and Hongsik Eom
* FIRST VERSION : Oct 23, 2020
* DESCRIPTION :
* PHP file contains all the webserver functionality used with php-zoo.html,
* using the POST method.
*/-->
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!--Retrieve input values-->
    <?php
      $name = $_POST['fullName'];
      $animal = $_POST['selectAnimal'];
     ?>
      <!-- Html title -->
    <title> The <?php echo $animal; ?> - HJ Zoo </title>
    <link rel='stylesheet' href='./css/animalServer.css'></head>
  </head>
  <body>
    <h1><span>HJ Zoo</span></h1>
    <h2>Hey <span><?php echo $name ?></span> here are some interesting facts about <span>The <?php echo $animal ?></span></h2>
    <div id="table" align="center">
      <table>
        <tr>
            <!-- Animal image -->
          <td><img src="./theZoo/<?php echo $animal?>.jpg"></td>
          <td class='animalDescription'>
            <ul class='contents'>
              <!-- open file, to display info -->
              <?php
                $filePath = "./theZoo/" . $animal . ".txt";
                $file = fopen($filePath, "r") or die ("Unable to open the file!");
                // Get line until end-of-file
                while(!feof($file))
                {
                    echo "<li>" . fgets($file) . "</li><br>";
                }
                fclose($file);  // close file
              ?>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
<!-- Html Ends -->
