function AboutYOLO() {
  return (
    <div className="yolo_section">
      <div className="yolo_content">
        <h2>ABOUT YOLO</h2>
        <p>
          You Only Look Once (YOLO) is an object detection algorithm that works
          by dividing an input image into a grid and predicting bounding boxes
          and class probabilities for each grid cell simultaneously. YOLO
          operates in a single forward pass through the neural network, making
          it highly efficient. The network predicts bounding boxes with
          associated confidence scores and class probabilities directly,
          allowing for quick and accurate object detection. YOLO can detect
          multiple objects in an image, even if they overlap, by assigning
          different bounding boxes to different objects. YOLO v7 will need a
          dataset to be prepared, with annotations specifying bounding boxes
          around sign language gestures. The YOLO model configuration must then
          be adapted to the specific use case, considering the number of classes
          (signs) to be detected. The model is trained on the annotated dataset,
          and its performance is evaluated on a validation set, with
          hyperparameter adjustments as needed. During inference, the trained
          YOLOv7 model is employed for detection of sign language gestures in
          video sequences.
        </p>
      </div>
    </div>
  );
}
export default AboutYOLO;
