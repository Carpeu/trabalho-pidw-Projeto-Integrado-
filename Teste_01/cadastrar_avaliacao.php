
<?php
include 'config.php';

$avaliacaoDescricao = $_POST['avaliacaoDescricao'];

$sql = "INSERT INTO avaliacoes (descricao) VALUES ('$avaliacaoDescricao')";

if ($conn->query($sql) === TRUE) {
    echo "Avaliação cadastrada com sucesso!";
} else {
    echo "Erro ao cadastrar avaliação: " . $conn->error;
}

$conn->close();
?>
