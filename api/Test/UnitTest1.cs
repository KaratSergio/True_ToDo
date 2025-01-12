using Xunit;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Controllers;
using TodoApi.Models;
using System.Collections.Generic;

namespace TodoApi.Tests
{
    public class TaskControllerTests
    {
        private readonly TaskController _controller;

        public TaskControllerTests()
        {
            _controller = new TaskController();
            TaskController.ClearTasks(); 
        }

        [Fact]
        public void GetTasks_ReturnsOkResult()
        {
            var result = _controller.GetTasks();
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var tasks = Assert.IsType<List<TodoTask>>(okResult.Value);
            Assert.Empty(tasks); // or Assert.NoEmpty(tasks);
        }

        [Fact]
        public void CreateTask_ReturnsCreatedAtAction()
        {
            var newTask = new TodoTask { Text = "New Task" };
            var result = _controller.CreateTask(newTask);
            var createdResult = Assert.IsType<CreatedAtActionResult>(result.Result);
            var task = Assert.IsType<TodoTask>(createdResult.Value);
            Assert.Equal(newTask.Text, task.Text);
        }

        [Fact]
        public void DeleteTask_ExistingId_ReturnsNoContent()
        {
            var newTask = new TodoTask { Text = "New Task" };
            _controller.CreateTask(newTask);
            var result = _controller.DeleteTask(newTask.Id);
            Assert.IsType<NoContentResult>(result);
        }

        [Fact]
        public void DeleteTask_NonExistingId_ReturnsNotFound()
        {
            var result = _controller.DeleteTask(999); 
            Assert.IsType<NotFoundResult>(result);
        }
    }
}
