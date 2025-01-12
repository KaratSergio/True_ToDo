using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace TodoApi.Controllers
{
    [Route("tasks")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private static List<Task> tasks = new List<Task>();
        private static int id = 1;

        [HttpGet]
        public ActionResult<IEnumerable<Task>> GetTasks()
        {
            return Ok(tasks);
        }

        [HttpPost]
        public ActionResult<Task> CreateTask([FromBody] Task task)
        {
            if (string.IsNullOrWhiteSpace(task.Text))
            {
                return BadRequest("Text is required.");
            }

            task.Id = id++;
            tasks.Add(task);
            return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound();
            }

            tasks.Remove(task);
            return NoContent();
        }

        public class Task
        {
            public int Id { get; set; }
            public required string Text { get; set; }
        }
    }
}
