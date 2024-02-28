
<?php
include 'config.php';

$etapaNome = $_POST['etapaNome'];

$sql = "INSERT INTO etapas (nome) VALUES ('$etapaNome')";

if ($conn->query($sql) === TRUE) {
    echo "Etapa cadastrada com sucesso!";
} else {
    echo "Erro ao cadastrar etapa: " . $conn->error;
}

$conn->close();
?>
