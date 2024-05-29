# Use the official Python 3.10 image as the base image  
FROM python:3.10-slim

WORKDIR /app

# Create a user 'taskweaver' and set permissions
RUN useradd -m taskweaver \
    && chown taskweaver:taskweaver /app \
    && mkdir -p /app/ces \
    && chown taskweaver:taskweaver /app/ces \
    && chmod 700 /app /app/ces

USER taskweaver

# Copy the requirements file and install dependencies
COPY --chown=taskweaver:taskweaver requirements.txt .
RUN pip install --no-cache-dir --no-warn-script-location --user -r requirements.txt

# Copy the project code
COPY --chown=taskweaver:taskweaver taskweaver/ces /app/taskweaver/ces
COPY --chown=taskweaver:taskweaver taskweaver/plugin /app/taskweaver/plugin
COPY --chown=taskweaver:taskweaver taskweaver/module /app/taskweaver/module
COPY --chown=taskweaver:taskweaver taskweaver/__init__.py /app/taskweaver/__init__.py

ENV JUPYTER_ALLOW_INSECURE_WRITES=true

# Set the PYTHONPATH environment variable
ENV PYTHONPATH "${PYTHONPATH}:/app"

# Define the command to run the application
CMD ["python", "-m", "taskweaver.ces.kernel.launcher"]
